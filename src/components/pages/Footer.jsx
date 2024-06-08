const Footer = () => {
  return (
    <footer
      className="font-roboto w-full text-center p-4 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-100"
      style={{ fontFamily: 'math' }}
    >
      © {new Date().getFullYear()} Yukitoshi Imaizumi-Zhou. All Rights
      Reserved.
    </footer>
  );
};

export default Footer;
