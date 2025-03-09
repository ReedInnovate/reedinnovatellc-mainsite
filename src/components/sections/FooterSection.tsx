
const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-medium">Reed Innovate</p>
            <p className="text-gray-500 text-sm">Product Marketing Consulting</p>
          </div>
          <div className="flex space-x-6">
            {[
              { name: "You", href: "#you" },
              { name: "Me", href: "#me" },
              { name: "Together", href: "#together" },
              { name: "Contact", href: "#contact" }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Reed Innovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
