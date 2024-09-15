export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-4 mt-auto z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} Project Management Tool. All rights
          reserved.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            プライバシーポリシー
          </a>
          <a href="#" className="hover:text-white transition-colors">
            利用規約
          </a>
          <a href="#" className="hover:text-white transition-colors">
            お問い合わせ
          </a>
        </div>
      </div>
    </footer>
  );
};
