import { footer } from "../data";

const Newsletter = () => {
  const { logo, links, legal, newsletter } = footer;
  return (
    <section className="lg:py-16 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0">
          <div>
            <div>
              <img className="mx-auto md:mx-0" src={logo} alt="" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-medium text-2xl">LINKS</h3>
            <ul className="mt-5 space-y-2">
              {links.map((link,idx)=>{
                return <li className="font-medium hover:font-bold" key={idx}><a href={link.href}>{link.name}</a></li>
              })}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-medium text-2xl">LEGAL</h3>
            <ul className="mt-5 space-y-2">
              {legal.map((legal,idx)=>{
                return <li className="font-medium hover:font-bold" key={idx}><a href={legal.href}>{legal.name}</a></li>
              })}
            </ul>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="font-medium text-2xl">NEWSLETTER</h3>
            <p className="text-light mt-5 mb-3">{newsletter.title}</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mb-3 flex items-center justify-between  p-[5px] border">
              <input placeholder="Enter your email" className="outline-none w-full " type="text" />
              <button className="py-1 px-4 text-white bg-accent hover:bg-accentHover">Subscribe</button>
            </form>
            <small className="text-light">{newsletter.subtitle}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
