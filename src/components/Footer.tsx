import { copyright } from "../data";

const Footer = () => {
  const { link1, link2, copyText, social } = copyright;
  return (
    <footer className="lg:pt-16 py-8">
      <div className="container mx-auto">
        <div className="border-t flex flex-col items-center md:flex-row justify-center md:justify-between pt-5 gap-2 md:gap-0">
          <div className="flex items-center gap-7">
            <a className="font-medium" href={link1.href}>{link1.name}</a>
            <a className="font-medium" href={link2.href}>{link2.name}</a>
          </div>
          <p className="font-medium">{copyText}</p>
          <div className="flex gap-2 items-center">
            {social.map((item, idx) => {
              return (
                <a key={idx} href={item.href}>
                  <img src={item.icon} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
