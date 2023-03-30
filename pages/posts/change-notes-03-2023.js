import { Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Section from '../../components/section'

const Page = () => {
  return (
    <Layout title='Introducing Some Changes'>
      <Container>
        <Title>Introducing Some Changes...</Title>
        <Section delay={0.1}>
          <P>
            Hey, all! Most of you probably haven&apos;t noticed, but since
            yesterday there have been some service interruptions due to
            maintenace. As I handle all the newsletter subscription, mailing,
            and user management myself, there were some features lacking upon
            its initial release. I&apos;ve heard your feedback and have made the
            necessary changes to both the website and mailing list.
            Introducing... the manage page!
          </P>
          <P mt='15px'>
            The manage page will allow you to securely modify the status of your
            subscription without requiring account creation. Simply enter your
            email, enter the verification code sent to you, and you&apos;re in!
            It&apos;s as easy as that.
          </P>
          <P mt='15px'>
            I will also publicly announce that I&apos;m looking into building
            out a dedicated site for my blog. I feel like due to the scale
            we&apos;ve eclipsed the need for it to be attached to my portfolio
            and consulting site. This is still a ways off (months probably), but
            I just thought I&apos;d let everyone know so I can hear your
            feedback on it. If you&apos;d like to share your thoughts, just
            respond to this email with your preference.
          </P>

          <List ml={4} my={2}>
            <ListItem>
              <Meta>Date</Meta>
              <span>March 23, 2023</span>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
