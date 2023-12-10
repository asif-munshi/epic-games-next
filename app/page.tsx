//import { Button } from '@/components/ui/button'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button>Click me</Button>
      <Checkbox defaultSelected>Option</Checkbox>
    </main>
  )
}
