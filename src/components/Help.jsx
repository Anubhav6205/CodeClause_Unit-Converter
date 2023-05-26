import React from "react";
import "./css/Help.css"
const Help = () => {
  return (
    <div className="help-page">
      <h2>Help/FAQ</h2>
      <p>
        If you have any questions or need assistance, please refer to the
        frequently asked questions below or contact our support team.
      </p>
      <div className="faq-section">
        <h3 className="faq-section-title">How do I convert units?</h3>
        <p className="faq-section-content">
          To convert units, select the desired unit type from the sidebar and
          enter the value you want to convert. The converted values will be
          displayed instantly.
        </p>
      </div>
      <div className="faq-section">
        <h3 className="faq-section-title">Are the currency rates up-to-date?</h3>
        <p className="faq-section-content">
          Yes, the currency converter uses real-time exchange rates provided by
          a reliable source to ensure accuracy.
        </p>
      </div>
      <div className="faq-section">
        <h3 className="faq-section-title">How can I contact customer support?</h3>
        <p className="faq-section-content">
          You can reach our support team by visiting the Contact page and
          filling out the contact form. We will respond to your inquiry as soon
          as possible.
        </p>
      </div>
    </div>
  );
};

export default Help;
