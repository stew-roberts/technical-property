import PropTypes from 'prop-types'
import React from 'react'
import MailchimpForm from 'react-mailchimp-form'

export default function Mailchimp(props) {
  const {heading, subtitle, actionUrl} = props

  return (
    <section className="">
      <div className="">
        <h2 className="">{heading}</h2>
        <p className="">{subtitle}</p>
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                className: styles.email,
                required: true,
              },
            ]}
            buttonClassName=""
            messages={{
              sending: 'Sending...',
              success: 'Thank you for subscribing!',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write an e-mail.',
              duplicate: 'Already subscribed',
              button: 'Subscribe!',
            }}
            className=""
          />
        )}
      </div>
    </section>
  )
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
}
