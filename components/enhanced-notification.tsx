'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function EnhancedNotification() {
  const [isAttending, setIsAttending] = useState(false)

  const agendaItems = [
    {
      title: "团队整体方向",
      description: "阐明金合欢的核心愿景和长远发展目标，帮助大家更好地理解团队使命。"
    },
    {
      title: "外网访问教学",
      description: "介绍如何安全、便捷地访问外网，特别是如何访问YouTube、Google等外部资源，为团队的资源获取和信息拓展提供保障。"
    },
    {
      title: "AI工具的使用",
      description: "讲解如何有效使用ChatGPT及其他AI工具，以支持大家的日常工作需求。分享如何在VSCode中集成AI辅助编写代码，提升开发效率。探讨如何通过一句话生成前端网页，并实现全栈项目的全自动编写流程。"
    },
    {
      title: "推文部的工作安排",
      description: "部署推文部的工作计划，明确任务分配，探索利用AI辅助撰写科技类推文的流程，确保发布质量与效率。"
    },
    {
      title: "团队教学环节",
      description: "涉及其他重要技能的培训，帮助大家更快适应团队的工作流程，并提高整体的执行力。"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-4xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <CardHeader className="text-center bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 rounded-t-xl">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full mx-auto mb-4"
            >
              <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-green-600 to-blue-600 tracking-widest">
                ACACIA
              </h1>
            </motion.div>
            <CardTitle className="text-3xl font-bold text-gray-800">金合欢（Acacia）团队通知</CardTitle>
            <CardDescription className="text-lg text-gray-700">首次团队会议 - 更新通知</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <p className="text-center font-semibold text-lg text-gray-800">各位金合欢（Acacia）团队成员：</p>
            <p className="text-gray-700">
              为了确保团队顺利起步，并提升我们的工作效率，现发布更新后的首次团队会议通知。会议定于2024/11/13 晚上八点半召开，具体议程如下：
            </p>
            <Accordion type="single" collapsible className="w-full">
              {agendaItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-yellow-700 hover:text-yellow-800">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 bg-white rounded-lg p-4 shadow-inner">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Separator className="my-6" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-yellow-100 to-green-100 border-l-4 border-yellow-400 p-4 rounded-lg shadow-md"
            >
              <p className="font-semibold text-center text-gray-800">
                请全体成员准时参会，共同助力金合欢团队（Acacia）未来的发展！
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <motion.div whileHover={{ y: -5 }} className="flex items-center text-gray-600 bg-white p-2 rounded-full shadow-md">
                <CalendarDays className="mr-2 text-yellow-600" />
                <span>2024/11/13</span>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex items-center text-gray-600 bg-white p-2 rounded-full shadow-md">
                <Clock className="mr-2 text-green-600" />
                <span>晚上八点半</span>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex items-center text-gray-600 bg-white p-2 rounded-full shadow-md">
                <MapPin className="mr-2 text-blue-600" />
                <span>线上会议</span>
              </motion.div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center bg-gradient-to-r from-yellow-100 via-green-100 to-blue-100 rounded-b-xl p-6">
            <p className="text-sm text-gray-600">金合欢团队 敬上</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setIsAttending(!isAttending)}
                variant={isAttending ? "secondary" : "default"}
                className="transition-all duration-300 ease-in-out"
              >
                {isAttending ? '已确认参加' : '确认参加'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}