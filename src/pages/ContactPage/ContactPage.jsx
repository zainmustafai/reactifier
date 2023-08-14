import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import ContactInfoCard from "./components/ContactInfoCard";
import { PhoneFilled, MessageFilled, HomeFilled } from "@ant-design/icons";
import ContactForm from "./components/ContactForm";
const ICON_CLASSES =
  "text-4xl pr-4 border-r py-10 border-lightGray dark:border-darkBlue text-primary";

const ContactPage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeading>
        Contact <span className="text-primary">Me</span>
      </PageHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* CONTACT INFO SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
          <ContactInfoCard
            title={"Call me"}
            value={"+923021554648"}
            icon={<PhoneFilled className={ICON_CLASSES} />}
          />

          <ContactInfoCard
            title={"Email me"}
            value={"+923021554648"}
            icon={<MessageFilled className={ICON_CLASSES} />}
          />

          <ContactInfoCard
            title={"Location"}
            value={"Muhammadi Chowk Jhelum, Punjab, Pakistan. 49600"}
            icon={<HomeFilled className={ICON_CLASSES} />}
          />
        </section>
        {/* CONTACT FORM SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
