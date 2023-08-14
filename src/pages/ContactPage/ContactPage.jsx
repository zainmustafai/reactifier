import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import ContactInfoCard from "./components/ContactInfoCard";
import {
  PhoneFilled,
  MessageFilled,
  HomeFilled,
  // MessageOutlined,
} from "@ant-design/icons";
import ContactForm from "./components/ContactForm";
const ICON_CLASSES =
  "text-2xl md:text-4xl pr-4 border-r py-10 border-lightGray dark:border-darkBlue text-primary";

const ContactPage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeading>
        Contact <span className="text-primary">Me</span>
      </PageHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* CONTACT INFO SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-4">📲 Contact Info</h2>
          <ContactInfoCard
            title={"Call me"}
            value={"+923021554648"}
            icon={<PhoneFilled className={ICON_CLASSES} />}
          />

          <ContactInfoCard
            title={"Email me"}
            value={"zforzain2000@gmail.com"}
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
          <h2 className="text-3xl font-bold mb-4"> 📧 Get in touch</h2>
          <ContactForm />
          {/* <a href="https://wa.me/+923021554648" className="text-primary">
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              <MessageOutlined className="text-2xl font-black space-x-2" />{" "}
              Whatsapp
            </button>
          </a> */}
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
