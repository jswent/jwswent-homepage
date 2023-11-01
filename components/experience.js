import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import Image from 'next/image'

import { useColorModeValue } from '@chakra-ui/react'

import thayer from '../public/images/logos/thayer.png'
import transocean from '../public/images/logos/transocean.png'
import sta from '../public/images/logos/sta.png'
import stech from '../public/images/logos/s-logo.png'
import learnsight from '../public/images/logos/learnsight.png'
import sandbox from '../public/images/logos/mit-sbif.jpeg'

const experiences = [
  {
    title: 'Graduated High School at Thayer Academy',
    company_name: 'Braintree, MA',
    icon: thayer,
    iconBg: '#fff',
    date: 'June 2021',
    points: [
      'Global Scholar graduation distinction',
      'High Honor Roll 2018 - 2021'
    ]
  },
  {
    title: 'Software/Research Intern',
    company_name: 'Transocean, Ltd.',
    icon: transocean,
    iconBg: '#fff',
    date: 'June 2021 - August 2022',
    points: [
      'Reported directly to General Counsel',
      'Developed legal software for internal counsel',
      'Managed legal corporate intranet'
    ]
  },
  {
    title: 'Computer Science Student',
    company_name: 'University of St Andrews',
    icon: sta,
    iconBg: '#fff',
    date: 'September 2021 - present',
    points: ["Dean's List", 'Medal for CS1007']
  },
  {
    title: 'Research Assistant',
    company_name: 'University of St Andrews',
    icon: sta,
    iconBg: '#fff',
    date: 'September 2022 - December 2022',
    points: [
      'Assisted professors Simon Dobson and Juan Ye in researching epidemic modeling using artificial intelligence and machine learning'
    ]
  },
  {
    title: 'Founder & CEO',
    company_name: 'Swent Consulting',
    icon: stech,
    iconBg: '#fff',
    date: 'September 2022 - present',
    points: [
      'Formalized years of independent and corporate software development into a full-service digital consulting firm.',
      'Primary services in software architecture and workflow consulting, product development, and more...'
    ]
  },
  {
    title: 'VP of Engineering',
    company_name: 'Learnsight',
    icon: learnsight,
    iconBg: '#fff',
    date: 'January 2023 - April 2023',
    points: [
      'Conducted primary market research to identify unmet needs in the Educational Technology sector and deliver a new-age collaborative learning platform',
      'Designed a product plan and mock-up and oversaw development to deliver an MVP to early adopters',
      'Hired and coordinated a team of developers across multiple time zones and countries'
    ]
  },
  {
    title: 'Manager of Systems & Development',
    company_name: 'MIT Sandbox Innovation Fund Program',
    icon: sandbox,
    iconBg: '#fff',
    date: 'March 2023 - present',
    points: [
      'Responsible for managing and maintaining existing infrastructure with the goal of developing an in-house end-to-end platform for startup applications, review, management, billing, and more...',
      'Developed multiple internal applications for the team and external sites for events, fundraising, reporting, and more...',
      'Released a new project management and documentation system and delivered training'
    ]
  },
  {
    title: 'Founder',
    company_name: 'Digitall Uplift Management, LLC.',
    iconBg: '#fff',
    date: 'June 2023 - present',
    points: [
      'DigitALL Uplift is an accelerator for social ventures, where instead of providing dilutive funding we provide access to expert technical resources and advising through a network of developers and mentors wishing to volunteer their time',
    ]
  }
]

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: useColorModeValue('#fff', '#2D3748'),
        color: useColorModeValue('#000', '#fff')
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      icon={
        <div className='flex justify-center items-center w-full h-full bg-white overflow-hidden rounded-xl'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3
          className={useColorModeValue(
            'text-black text-[24px] font-bold',
            'text-white text-[24px] font-bold'
          )}
        >
          {experience.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-2 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div className='mt-2 flex flex-col overflow-x-hidden'>
      <VerticalTimeline layout='1-column-left'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
