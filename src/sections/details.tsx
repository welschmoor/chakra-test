import { Select, VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Checkbox, Button } from "@chakra-ui/react"


const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">

      <VStack spacing={3} alignItems="flex-start" >
        <Heading size="2xl">Your details</Heading>
        <Text>If you aready have an account, click here to sign in.</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full"  >

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Smith" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="9300 Sunset Blvd." />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="New York" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Select placeholder="Country">
              <option>Germany</option>
              <option>France</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        
        <GridItem colSpan={2}>
          <Button size="lg" w="full">Ship to billing address</Button>
        </GridItem>

      </SimpleGrid>

    </VStack>
  )
}

export default Details