"use client"

import  {Card, CardContent, CardHeader } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Form = () =>{
  return (
        <Card className="bg-[#030014] text-white border-slate-600">
            <CardHeader>
                <h1 className='text-2xl font-bold'>Drop a Message</h1>
            </CardHeader>
            <CardContent>
            <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" className='bg-[#030014] text-white border-slate-600'/>
            </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" className='bg-[#030014] text-white border-slate-600'/>
                </div>
                <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea type="text" id="message" name="message" className='bg-[#030014] text-white border-slate-600'/>
                </div>
            </CardContent>
            <div className='flex justify-center item-center'>
                <Button variant='classic' type="submit">Submit</Button>
            </div>
        </Card>
  )
}


export default Form;