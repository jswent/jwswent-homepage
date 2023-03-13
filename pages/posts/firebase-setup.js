import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Box,
  Text,
  Code
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import CodeBlock from '../../components/code'

const firebaseConfig = `import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANlSaWqvb12dKn89rU-iedYfwCkTVm_SA",
  authDomain: "fir-test-fa5ef.firebaseapp.com",
  projectId: "fir-test-fa5ef",
  storageBucket: "fir-test-fa5ef.appspot.com",
  messagingSenderId: "587780525878",
  appId: "1:587780525878:web:9c7b7322bd0a44871a2d97",
  measurementId: "G-838ECE8YJ9"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);`

const collAdd = `const handleRequest = async (data) => {
  try {
    await addDoc(collection(db, "newsletter-list"), {
      email: data.email,
      createdAt: Timestamp.now()
    })
  } catch (err) {
    console.error('Error:', err);
  }
}`

const Page = () => {
  return (
    <Layout title='How to Setup Firebase with React + Next.js'>
      <Container>
        <Title>
          How to Setup Firebase with React + Next.js <Badge>2023</Badge>
        </Title>
        <WorkImage src='/images/posts/firebase-setup/header.png' />
        <P>
          Google&apos;s famous BAAS (Backend-As-A-Service){' '}
          <Link href='https://www.firebase.com'>Firebase</Link> has long been
          used by indepedent developers to quickly develop web applications
          without dealing with dedicated servers. At{' '}
          <Link href='https://www.learnsight.io'>Learnsight</Link> we&apos;re
          leveraging Firebase&apos;s simplicity to reduce our go to market
          timing. Since I&apos;ve been using Firebase to develop our
          next-generation learning platform, I decided to do a quick tutorial on
          how to get up and running, and also how to secure it and route through
          an API.
        </P>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>Date</Meta>
            <span>February 24, 2023</span>
          </ListItem>
          <ListItem>
            <Meta>Prerequesites</Meta>
            <span>ReactJS 18.2, Next.js 13, TypeScript (optional)</span>
          </ListItem>
        </List>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title' mt={4}>
            Create a New Firebase Project
          </Heading>
          <P>
            Go to the{' '}
            <Link href='https://console.firebase.google.com'>
              Firebase Console
            </Link>{' '}
            and click &apos;Add Project&apos;. Enter your project&apos;s name,
            select your preferred analytics settings, and click finish.
          </P>
          <br />
          <P>
            Next, navigate to the &apos;Cloud Firestore&apos; option and click
            &apos;Create database&apos;. For now start the project in &apos;Test
            mode&apos;, as you can go back and customize your security rules
            later. Do note that if you don&apos;t update your security rules
            within 30 days, they will start denying all requests. Choose your
            location (I use multi-regional), and then press &apos;Enable&apos;
            to create your firestore database.
          </P>
          <Box p='2' opacity='0' />
          <WorkImage src='/images/posts/firebase-setup/firestore-created.png' />
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Creating Your First Collection
          </Heading>
          <P>
            As Firebase is a NoSQL structured database, it operates using
            documents and collections. To start interacting with our database,
            we&apos;re going to have to create a root-level collection. Since I
            use firebase to manage the newsletter list for this blog, let&apos;s
            name our first collection &apos;newsletter-list&apos;.
          </P>
          <Box p='2' opacity='0' />
          <WorkImage src='/images/posts/firebase-setup/collection-create.png' />
          <P>
            If you have a data model you have already designed, create a sample
            document which will showcase that. Otherwise, create an empty
            document and move on.
          </P>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Add Firebase to Your App
          </Heading>
          <P>
            Return to your project overview, and click on the &apos;Web&apos;
            button to add a new web app to your Firebase project. Enter a
            nickname for the app you will be accessing this database from, and
            click &apos;Register&apos;. Then you will be given the config to add
            the Firebase SDK to your app. Copy the firebaseConfig object as we
            will use that to access the database.
          </P>
          <Box p='2' opacity='0' />
          <WorkImage src='/images/posts/firebase-setup/firebase-config.png' />
          <P>
            Now, navigate to your codebase and install the firebase package from
            your desired package manager.
          </P>
          <Box p='2' opacity='0' />
          <CodeBlock>npm install firebase</CodeBlock>
          <Box p='2' opacity='0' />
          <P>
            Then navigate to your components folder and create a new file for
            instantiating your firebase objects. We&apos;ll paste the{' '}
            <Code className='indent-0'>firebaseConfig</Code> object taken from
            earlier in here.
          </P>
          <Box p='1' opacity='0' />
          <Meta>Firebase.js</Meta>
          <Box p='1' opacity='0' />
          <CodeBlock>{firebaseConfig}</CodeBlock>
        </Section>

        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            Accessing Your Collection From the Client
          </Heading>
          <P>
            To add a document to your collection from the client, now all you
            have to do is import your <Code className='indent-0'>db</Code>{' '}
            object and the firestore <Code className='indent-0'>addDoc</Code>{' '}
            and <Code className='indent-0'>collection</Code> functions. Create a
            new async function to process your database request, for example
            we&apos;ll call it <Code className='indent-0'>handleRequest()</Code>
            .
          </P>
          <Box p='2' opacity='0' />
          <CodeBlock>{collAdd}</CodeBlock>
        </Section>

        <Section delay={0.5}>
          <Heading as='h3' variant='section-title'>
            Where to go From Here
          </Heading>
          <P>
            If you wish to keep your database access from the client, then you
            must properly secure your database usage rules. The test ruleset
            used in this tutorial IS NOT suitable for a production deployment,
            as any user can see the web request or webpack and reverse engineer
            your api keys and get full access to your database. Read more about
            Firebase security rules{' '}
            <Link href='https://firebase.google.com/docs/rules'>here</Link>.
          </P>
          <br />
          <P>
            I would strongly suggest, however, that you route your firebase
            access through a server-side API and store your access keys as
            environment variables on the server. This in combination with secure
            database access rules will almost entirely protect you against
            malicious database attacks. If you want to see this in action, check
            out my post{' '}
            <Link>
              How to Create a Newsletter Registration List with Firebase for
              FREE
            </Link>
            .
          </P>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
