'use client'

import { useState, useEffect } from 'react'
import { X, AlertTriangle, Calendar, Info, PartyPopper } from 'lucide-react'

export interface Announcement {
  id: string
  type: 'closure' | 'event' | 'info' | 'special'
  title: string
  message: string
  active: boolean
  startDate?: string
  endDate?: string
  priority?: 'high' | 'normal' | 'low'
}

interface AnnouncementBannerProps {
  announcements: Announcement[]
}

const typeConfig = {
  closure: {
    icon: AlertTriangle,
    bgColor: 'bg-amber-900/90',
    borderColor: 'border-amber-600',
    iconColor: 'text-amber-400'
  },
  event: {
    icon: PartyPopper,
    bgColor: 'bg-wood-800/90',
    borderColor: 'border-amber-500',
    iconColor: 'text-amber-400'
  },
  info: {
    icon: Info,
    bgColor: 'bg-wood-800/90',
    borderColor: 'border-paper-400',
    iconColor: 'text-paper-300'
  },
  special: {
    icon: Calendar,
    bgColor: 'bg-amber-800/90',
    borderColor: 'border-amber-500',
    iconColor: 'text-amber-300'
  }
}

export default function AnnouncementBanner({ announcements }: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load dismissed announcements from localStorage
    const stored = localStorage.getItem('dismissedAnnouncements')
    if (stored) {
      setDismissed(JSON.parse(stored))
    }
  }, [])

  const dismissAnnouncement = (id: string) => {
    const newDismissed = [...dismissed, id]
    setDismissed(newDismissed)
    localStorage.setItem('dismissedAnnouncements', JSON.stringify(newDismissed))
  }

  // Filter active announcements that haven't been dismissed
  const activeAnnouncements = announcements.filter(a => {
    if (!a.active) return false
    if (dismissed.includes(a.id)) return false
    
    // Check if announcement is within date range
    const now = new Date()
    if (a.startDate && new Date(a.startDate) > now) return false
    if (a.endDate && new Date(a.endDate) < now) return false
    
    return true
  })

  if (!mounted || activeAnnouncements.length === 0) return null

  return (
    <div className="relative z-50">
      {activeAnnouncements.map((announcement) => {
        const config = typeConfig[announcement.type] || typeConfig.info
        const Icon = config.icon

        return (
          <div
            key={announcement.id}
            className={`${config.bgColor} border-b-2 ${config.borderColor} backdrop-blur-sm`}
          >
            <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center flex-1 min-w-0">
                  <span className={`flex p-2 rounded-lg ${config.bgColor}`}>
                    <Icon className={`h-5 w-5 ${config.iconColor}`} aria-hidden="true" />
                  </span>
                  <div className="ml-3 font-medium text-paper-100 truncate">
                    <span className="font-bold">{announcement.title}:</span>{' '}
                    <span className="text-paper-200">{announcement.message}</span>
                  </div>
                </div>
                <button
                  onClick={() => dismissAnnouncement(announcement.id)}
                  className="flex-shrink-0 p-1 rounded-md hover:bg-wood-700/50 transition-colors"
                  aria-label="Dismiss announcement"
                >
                  <X className="h-5 w-5 text-paper-300 hover:text-paper-100" />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
