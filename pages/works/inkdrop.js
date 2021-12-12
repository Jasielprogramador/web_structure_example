import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Inkdrop <Badge>2020-</Badge>
      </Title>
      <P>
       Aplicacion interactiva para ver cosas en paginas web
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Pagina web</Meta>
          <Link href="https://thispersondoesnotexist.com/">
          https://thispersondoesnotexist.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/v.png" alt="Whatweb" />
    </Container>
  </Layout>
)

export default Work
