import { H2, H1, H3, H4, P } from '@components/tags'
import SvgKavichki from 'svg/SvgKavichki'
import { AutoplayVideo } from '@wethegit/react-autoplay-video'
import { useState } from 'react'
import TextLine from './TextLine'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Photo = ({ src, delay }) => {
  const [rotation, setRotation] = useState(Math.random() * 70 - 35)
  // const rotation = Math.random() * 90 - 45
  return (
    <motion.div
      initial={{ opacity: 0, left: 0 }}
      animate={{ opacity: 1, left: '50%' }}
      transition={{ duration: 1, delay }}
      // style={{ rotate: `${rotation}deg` }}
      className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] max-w-100"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: `${rotation}deg` }}
        transition={{ duration: 1, delay }}
        // style={{ rotate: `${rotation}deg` }}
        className="px-[2.8%] pt-[2.8%] shadow-lg bg-[#ece7df] pb-[11%]"
      >
        <img src={src} className="object-cover aspect-1" />
      </motion.div>
    </motion.div>
  )
}

var interval
const TitleBlock = () => {
  const [isStarted, setIsStarted] = useState(false)
  const [sec, setSec] = useState(0)

  console.log('sec :>> ', sec)

  useEffect(() => {
    if (isStarted && sec === 0) {
      interval = setInterval(() => setSec((state) => state + 1), 1000)
    }
    if (sec > 67) {
      clearInterval(interval)
    }
  }, [sec, isStarted])

  // const userIsLogged = !!useRecoilValue(loggedUserAtom)
  // const start = () => {
  //   const audio = document.querySelector('audio')
  //   audio.volume = 0.2
  //   audio.play()
  // }
  // const modalsFunc = useRecoilValue(modalsFuncAtom)
  // const router = useRouter()

  // const prefersReducedMotion = window.matchMedia(
  //   '(prefers-reduced-motion: reduce)'
  // ).matches

  // useEffect(() => {
  //   // window.addEventListener('DOMContentLoaded', (event) => {
  //   const audio = document.querySelector('audio')
  //   console.log('1 :>> ', 1)
  //   audio.volume = 0.2
  //   audio.play()
  //   // })
  // }, [])

  return !isStarted ? (
    <div className="relative flex justify-center items-center min-h-screen bg-[#000000]">
      <div
        className="px-6 py-8 text-black bg-gray-200 cursor-pointer"
        onClick={() => setIsStarted(true)}
      >
        Нажми на меня
      </div>
    </div>
  ) : (
    <div
      className="relative min-h-screen bg-[#000000]"
      // style={{
      //   backgroundImage: `url("/texture_small.jpg")`,
      //   // backgroundRepeat: 'repeat',
      //   // backgroundPosition: 'top 48px right',
      //   // backgroundSize: '',
      // }}
    >
      <div className="relative h-screen min-h-screen overflow-hidden">
        <AutoplayVideo
          src="ocean.mp4"
          className="min-h-full grayscale"
          // posterImg="your-poster-image.jpg"
          description="This is a description of the video."
          // prefersReducedMotion={prefersReducedMotion}
          // style={{ '--aspect-ratio': 'calc((9 / 16) * 100%)' }}
          // renderReducedMotionFallback={() => (
          //   <img
          //     src="your-fallback-image.jpg"
          //     alt="Description of the fallback image."
          //   />
          // )}
          loop
          controlsList="nodownload"
        />
        <audio id="audio" loop autoPlay>
          <source src="music.mp3" type="audio/mpeg" controlsList="nodownload" />
        </audio>
      </div>
      {/* <ReactPlayer
        style={{
          position: 'absolute',
          top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          // width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
        }}
        loop
        muted
        playing
        url="rain.mp4"
      /> */}
      {/* <video
        style={{
          position: 'absolute',
          // top: 0,
          // left: 0,
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
        }}
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        src="rain.mp4"
      /> */}
      {/* <source src="rain.mp4" type="video/mp4" /> */}
      {/* </video> */}
      {/* <iframe hidden src="rain.mp4" allow="autoplay" type="audio/mpeg"></iframe> */}
      <div className="absolute top-0 flex flex-col items-center w-full h-full min-h-[calc(100vh-70px)] px-10 pt-5 tablet:pt-12 pb-8 tablet:pb-10 bg-[#000000] bg-opacity-60 laptop:px-20 ">
        {/* <img
          className="absolute w-12 h-12 tablet:w-16 tablet:h-16 top-6 right-6 tablet:top-14 tablet:right-12 laptop:h-20 laptop:w-20"
          src={'/img/other/30-plus.png'}
          alt="30+"
          // width="100%"
          // height="100%"
        /> */}
        {/* <Svg30Plus className="absolute w-12 h-12 tablet:w-16 tablet:h-16 top-6 right-6 tablet:top-14 tablet:right-12 laptop:h-20 laptop:w-20 fill-general" /> */}
        <div className="flex flex-col items-center gap-y-1">
          {/* <Logo /> */}
          {/* <H1
            style={{ textShadow: '1px 1px 2px black' }}
            // style={{ fontSize: '6vw', lineHeight: '5vw' }}
          >
            АЛЕКСЕЙ БЕЛИНСКИЙ
          </H1>
          <H4 style={{ textShadow: '1px 1px 2px black' }} bold={false}>
            ИЛЛЮЗИОНИСТ
          </H4> */}
          <H2
            textStyle="text-5xl tablet:text-6xl"
            bold={false}
            className="mt-12 mb-8 text-gray-200 font-miamaNueva whitespace-nowrap"
          >
            Shu Family
          </H2>
          <motion.div
            initial={{ height: 'auto' }}
            animate={{ height: 0 }}
            transition={{ delay: 68 }}
          >
            <div
              className="flex flex-col items-center h-40 mt-10 text-base leading-8 text-gray-200 tablet:leading-10 tablet:text-xl font-miamaNueva"
              // style={{ textShadow: '1px 1px 1px #ffffff' }}
            >
              <TextLine
                key="1"
                text="Моя дорогая Лис!"
                delay={4}
                isVisible={sec < 15}
              />
              <TextLine
                key="2"
                text="Я помню нашу историю"
                delay={7}
                isVisible={sec < 18}
              />
              <TextLine
                key="3"
                text="Там были взлёты и падения,"
                delay={10}
                isVisible={sec < 21}
              />
              <TextLine
                key="4"
                text="Радость и Грусть,"
                delay={13}
                isVisible={sec < 24}
              />
              <TextLine
                key="5"
                text="Счастье и Отчаяннее,"
                delay={16}
                isVisible={sec < 27}
              />
              <TextLine
                key="6"
                text="Уверенность и сомнения."
                delay={19}
                isVisible={sec < 30}
              />
              <TextLine
                key="7"
                text="Но одно остаётся неизменным"
                delay={22}
                isVisible={sec < 33}
              />
              <TextLine
                key="8"
                text="Наша Любовь!!!"
                delay={25}
                isVisible={sec < 36}
              />
              <TextLine
                key="9"
                text="Наше пламя разгорелось с новой силой"
                delay={28}
                isVisible={sec < 39}
              />
              <TextLine
                key="10"
                text="Наше время пришло"
                delay={31}
                isVisible={sec < 42}
              />
              <TextLine
                key="11"
                text="Наша новая история начинается"
                delay={34}
                isVisible={sec < 45}
              />
              <TextLine
                key="12"
                text="Наше будущее будет ярче, чем звезды в небе"
                delay={37}
                isVisible={sec < 48}
              />
              <TextLine
                key="13"
                text="Я люблю каждую минуту проведенную с тобой"
                delay={40}
                isVisible={sec < 51}
              />
              <TextLine
                key="14"
                text="Я люблю каждый вздох сделанный рядом с тобой"
                delay={43}
                isVisible={sec < 54}
              />
              <TextLine
                key="15"
                text="Я люблю тебя каждой клеточкой себя"
                delay={46}
                isVisible={sec < 57}
              />
              <TextLine
                key="16"
                text="Я люблю тебя моя Лис!"
                delay={49}
                isVisible={sec < 60}
              />
              <TextLine
                key="17"
                text="Чего бы мне это не стоило,"
                delay={52}
                isVisible={sec < 63}
              />
              <TextLine
                key="18"
                text="Я готов с тобой идти до самого конца!"
                delay={55}
                isVisible={sec < 66}
              />
            </div>
          </motion.div>
          <div className="relative w-[70%] aspect-1 max-w-[420px]">
            <Photo src="fotos/1.jpg" delay={5} />
            <Photo src="fotos/2.jpg" delay={10} />
            <Photo src="fotos/3.jpg" delay={15} />
            <Photo src="fotos/4.jpg" delay={20} />
            <Photo src="fotos/5.jpg" delay={25} />
            <Photo src="fotos/6.jpg" delay={30} />
            <Photo src="fotos/7.jpg" delay={35} />
            <Photo src="fotos/8.jpg" delay={40} />
            <Photo src="fotos/9.jpg" delay={45} />
            <Photo src="fotos/11.jpg" delay={50} />
            <Photo src="fotos/12.jpg" delay={55} />
            <Photo src="fotos/13.jpg" delay={60} />
            <Photo src="fotos/14.jpg" delay={65} />
            <Photo src="fotos/15.jpg" delay={70} />
            <Photo src="fotos/16.jpg" delay={75} />
            <Photo src="fotos/17.jpg" delay={80} />
            <Photo src="fotos/18.jpg" delay={85} />
            <Photo src="fotos/19.jpg" delay={90} />
            <Photo src="fotos/20.jpg" delay={95} />
            <Photo src="fotos/21.jpg" delay={100} />
            <Photo src="fotos/22.jpg" delay={105} />
            <Photo src="fotos/23.jpg" delay={110} />
            <Photo src="fotos/24.jpg" delay={115} />
            <Photo src="fotos/25.jpg" delay={120} />
            <Photo src="fotos/26.jpg" delay={125} />
            <Photo src="fotos/27.jpg" delay={130} />
            <Photo src="fotos/28.jpg" delay={140} />
            <Photo src="fotos/29.jpg" delay={145} />
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 3, delay: 68 }}
            className="relative"
          >
            <SvgKavichki className="absolute bottom-0 left-0 w-4 h-4 tablet:w-6 tablet:h-6 fill-gray-500" />

            <div className="px-10 py-6 text-base italic leading-7 text-gray-200 teblet:text-xl tablet:leading-8 font-miamaNueva">
              Я в тебя влюбился не с первого взгляда, а с первого сообщения от
              тебя.
              <br />И уже тогда я понял, что, Вау, так не бывает.
              <br />
              Первый вопрос, который я тебе задал был <br />
              "А такая же ты сумасшедшая, как та Алиса в зазеркалье?"
              <br />Я люблю тебя в этой жизни и в следующих реинкарнациях!
            </div>
            <SvgKavichki className="absolute top-0 right-0 w-4 h-4 tablet:w-6 tablet:h-6 fill-gray-500" />
          </motion.div>
        </div>
        {/* <div className="w-full tablet:w-[80%] laptop:w-[65%]">
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-fulll"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fAabXGZroCA"
              title="Фокусник иллюзионист на праздник Красноярск Алексей Белинский"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
        {/* <div className="flex justify-center flex-1 max-h-[350px]">
          <img
            className="object-contain max-w-[90%] laptop:max-w-[100%] h-full"
            src={'/img/logo.webp'}
            alt="polovinka_uspeha"
            // width="100%"
            // height="100%"
          />
        </div>
        <div className="flex flex-col justify-between gap-y-2">
          <H1
            style={{ textShadow: '1px 1px 2px black' }}
            // style={{ fontSize: '6vw', lineHeight: '5vw' }}
          >
            Центр осознанных знакомств
          </H1>
          <H4 style={{ textShadow: '1px 1px 2px black' }} bold={false}>
            г.Красноярск
          </H4>
          <H3
            // className="font-thin"
            style={{ textShadow: '1px 1px 2px black' }}
          >
            Уникальные форматы знакомств
            <br />
            для поиска своей второй половинки
          </H3>
        </div> */}
        {/* {!userIsLogged && (
          <Link
            href={{
              pathname: '/login',
              query: { registration: true },
            }}
            shallow
          >
            <PulseButton
              className="mt-4"
              title="Зарегистрироваться"
              onClick={() =>
                router.push('./login?registration=true', '', { shallow: true })
              }
            />
          </Link>
        )} */}
        {/* <PulseButton
          className="mt-4"
          title="Оставить заявку"
          onClick={() => modalsFunc.request.add()}
        /> */}
      </div>
    </div>
  )
}

export default TitleBlock
