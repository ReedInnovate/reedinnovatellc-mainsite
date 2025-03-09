
const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg font-medium">Reed Innovate, LLC</p>
            <p className="text-gray-500 text-sm">Product Marketing Consulting</p>
          </div>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © {currentYear} Reed Innovate, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
