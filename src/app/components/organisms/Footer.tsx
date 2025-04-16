"use client";

import FooterTitle from "../atoms/FooterTitle";
import FooterText from "../atoms/FooterText";
import FooterSection from "../molecules/FooterSection";
import SocialLinks from "../molecules/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Brand Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold">Panto</h2>
          <FooterText>
            The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
          </FooterText>
        </div>

        {/* Services & Furniture */}
        <div className="flex gap-10 md:gap-20">
          <FooterSection title="Services" items={["Email Marketing", "Campaigns", "Branding"]} />
          <FooterSection title="Furniture" items={["Beds", "Chair", "All"]} />
        </div>

        {/* Social Media */}
        <SocialLinks />

      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t pt-4">
        <p>Copyright &copy; 2021</p>
        <div className="flex gap-6">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
