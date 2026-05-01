import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 text-gray-700 pt-20">
      {/* HERO SECTION */}
      
        <PageHeader title="Terms & Conditions"/>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 md:px-0 py-12 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Overview</h2>
          <p className="text-sm leading-7">
            We may collect personal identification information from Users in a
            variety of ways, including, but not limited to, when Users visit our
            site, subscribe to the newsletter, fill out a form, and in
            connection with other activities, services, features or resources we
            make available on our Site. Users may be asked for, as appropriate,
            name, email address, mailing address, phone number, company name. We
            will collect personal identification information from Users only if
            they voluntarily consent such information to us. Users can always
            refuse to supply personally identification information, except that
            it may prevent them from engaging in certain Site related
            activities.
          </p>
        </section>

        {/* General Permission */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            General permission to use and access and use limitations
          </h2>
          <p className="text-sm mb-4">
            This site is provided by <span className="font-semibold">Wilo</span>
            . <span className="font-semibold">Wilo</span> collects information
            in several ways from different parts of this site.
          </p>
          <ol className="list-decimal pl-6 text-sm space-y-2">
            <li>Complimentary ground shipping within 1 to 7 business days </li>
            <li>In-store collection available within 1 to 7 business days</li>
            <li> Next-day and Express delivery options also available</li>
            <li>
              Purchases are delivered in an orange box tied with a Bolduc
              ribbon, with the exception of certain items
            </li>
            <li>
              See the delivery FAQs for details on shipping methods, costs and
              delivery times
            </li>
          </ol>
        </section>

        {/* Confidential */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Confidential information
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <p> Wilo accepts the following payment methods: </p>
            <li>
              {" "}
              Credit Card: Visa,MasterCard, Discover, American Express, JCB,
              Visa Electron. The total will be charged to your card when the
              order is shipped.
            </li>
            <li>
              {" "}
              Wilo features a Fast Checkout option, allowing you to securely
              save your credit card details so that you don't have to re-enter
              them for future purchases.{" "}
            </li>
            <li>
              PayPal: Shop easily online without having to enter your credit
              card details on the website.Your account will be charged once the
              order is completed. To register for a PayPal account, visit the
              website paypal.com.
            </li>
          </ul>
        </div>

        {/* Linking */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Linking to this Site
          </h2>
          <p className="text-sm leading-7">
            Items returned within 14 days of their original shipment date in
            same as new condition will be eligible for a full refund or store
            credit. Refunds will be charged back form of payment used for
            purchase. Customer is responsible for shipping charges when making
            returns and shipping/handling fees of original purchase is
            non-refundable.
          </p>
        </section>

        {/* IP */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Intellectual property
          </h2>
          <p className="text-sm leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Security and storage
          </h2>
          <ol className="list-decimal pl-6 text-sm space-y-2">
            <li>Secure credit card processing</li>
            <li>Fast checkout option</li>
            <li>PayPal integration available</li>
          </ol>
        </section>
        <b>Last updated: January 25, 2025 at 24:00 pm</b>
      </div>
    </div>
  );
};

export default TermsConditions;
