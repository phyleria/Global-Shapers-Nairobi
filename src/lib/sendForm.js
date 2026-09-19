// Sends form submissions to the hub inbox using FormSubmit (https://formsubmit.co).
// No account or server needed. The first submission triggers an activation email
// to the address below; click the link in it once and every submission after that arrives.
export const FORM_EMAIL = 'globalshapersnairobi@gmail.com'

// The private code FormSubmit gave us for globalshapersnairobi@gmail.com.
// Using it instead of the email address keeps the address out of the form's sending code.
const FORM_ID = 'b941c12d72d1c9895210a2d87aedea41'

// subject: the email subject line. form: the <form> element that was submitted.
// Every field with a name="" attribute is included in the email, labelled by that name.
export async function sendForm(subject, form) {
  const data = Object.fromEntries(new FormData(form).entries())

  // Hidden "_honey" field: real people never fill it in, spam bots usually do
  if (data._honey) return

  const res = await fetch(`https://formsubmit.co/ajax/${FORM_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...data,
      _subject: subject,
      _template: 'table',          // shows the details as a neat table in the email
      _replyto: data['Email'] || '', // hitting Reply in Gmail replies to the person who filled the form
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