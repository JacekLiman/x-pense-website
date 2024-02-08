
import { MdArrowRightAlt } from "react-icons/md";

type CardsProps = {
    icon:string;
    title:string;
    subtitle:string;
    delay:number;
    active:boolean;
}

const Card = ({icon,title,subtitle,active}:CardsProps) => {
  return (
    <div className={` ${active ? "shadow-2xl":"" } w-[340px] h-[340px] flex flex-col gap-5 items-center rounded-[12px] transition-all p-8`}>
        <img src={icon} alt="" />
        <h3 className="text-[30px] font-medium">{title}</h3>
        <p className="text-center text-light">{subtitle}</p>
        <div className="text-2xl"><MdArrowRightAlt /></div>
    </div>
  )
}

export default Card