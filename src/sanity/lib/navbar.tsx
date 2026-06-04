import { Stack, Card, Flex } from '@sanity/ui'

function Navbar() {
  return (
    <Stack style={{margin:"0px"}}>
      <Card tone="caution" style={{background: '#003660', height: '60px', borderRadius: '10px'}}>
        <Flex style={{display: 'flex', alignItems: 'center', height:'100%', paddingLeft: '8px'}}>
          <img src={"/footer-hss-logo.png"} style={{width: '50px', height: '50px'}}/>
        </Flex>
      </Card>
    </Stack>
  )
}

export default Navbar