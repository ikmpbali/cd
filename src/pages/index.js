import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/AI_developer_image.jpg'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
      <title>Abdallah Awadalla | Home</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Abdallah Awadalla" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority
              sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw,
              50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Harnessing Code to Bring Visions to Life." className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-!3xl 
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As an adept Full-Stack Software Engineer, I strive to convert creative concepts into tangible web applications. Browse through my portfolio to experience my competency in JavaScript, HTML, CSS, React, and Node.js, embodied in a series of innovative projects.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Resume.pdf" target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid dorder-transparent hover:border-dark
                
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light md:p-2 md:px-4 md:text-base

                '

                download={true}
                >Resume<LinkArrow className='w-6 ml-1 
                lg:hidden' />

                </Link>
                <Link href="mailto:Awadallaabdallah@gmail.com" target={'_blank'}
                className='ml-4 text-lg font-medium capitalize text-dark hover:underline dark:text-light md:text-base'
                >Contact</Link>

              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Abdallah Awadalla" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
