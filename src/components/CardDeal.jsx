import Button from './Button'
import styles , {layout} from "../style"
import { card } from '../assets'

const CardDeal = () => {
  return (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal in <br className='sm:block hidden'/> few easy steps.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px] `}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button/>
    </div>

    <div className={`${layout.sectionImg} w-[100%] h-[100%] z-[5] relative`}>
      <img src={card} alt="Card"/>
    </div>
  </section>
  )
}

export default CardDeal