import { quotes } from "../assets"
import styles from "../style"

const FeedbackCard = ({content , name , title , img}) =>(
    <div className="flex justify-between flex-col py-12 px-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain"/>
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className={`flex justify-start items-center rounded-full`}>
        <img src={img} alt="name" className={`w-[50px]`}/>
        <div className="flex flex-col ml-4">
          <h4 className="text-white text-[20px] leading-[32px] font-semiBold font-poppins">
            {name}
          </h4>
          <p className={`${styles.paragraph} text-dimwhite leading-[24px] font-normal text-[14px] `}>
            {title}
          </p>
        </div>
      </div>
    </div>
  )


export default FeedbackCard

