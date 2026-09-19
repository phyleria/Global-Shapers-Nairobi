// Sends form submissions to the hub inbox using FormSubmit (https://formsubmit.co).
// No account or server needed.
//
// TO CHANGE THE INBOX: update FORM_EMAIL and set FORM_ID to ''. The next submission
// triggers an "Activate Form" email to the new address. Click it once, and (optionally)
// paste the private code from that email into FORM_ID.
export const FORM_EMAIL = 'contact@globalshapersnairobi.org'

// Private code FormSubmit sends in the activation email. It stands in for the email
// address so the address isn't in the sending code. Leave '' to send to FORM_EMAIL directly.
// Note: a code only works for the address it was issued to.
const FORM_ID = ''

// subject: the email subject line. form: the <form> element that was submitted.
// Every field with a name="" attribute is included in the email, labelled by that name.
export async function sendForm(subject, form) {
  const data = Object.fromEntries(new FormData(form).entries())

  // Hidden "_honey" field: real people never fill it in, spam bots usually do
  if (data._honey) return

  const res = await fetch(`https://formsubmit.co/ajax/${FORM_ID || FORM_EMAIL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...data,
      _subject: subject,
      _template: 'table',            // shows the details as a neat table in the email
      _replyto: data['Email'] || '', // hitting Reply replies to the person who filled the form
    }),
  })

  const result = await res.json().catch(() => ({}))
  if (!res.ok || String(result.success) !== 'true') {
    // Shows FormSubmit's own explanation in the browser console (F12 > Console),
    // e.g. that the form still needs activating
    console.warn('Form not sent. FormSubmit said:', result.message || `HTTP ${res.status}`)
    throw new Error(result.message || 'Submission failed')
  }
}