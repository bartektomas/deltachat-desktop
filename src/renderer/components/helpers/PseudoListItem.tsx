import React, { PropsWithChildren, CSSProperties } from 'react'
import { PseudoContact, AvatarBubble, QRAvatar } from '../contact/Contact'
import { ContactListItemWrapper } from '../contact/ContactListItem'

export function PseudoListItem(
  props: PropsWithChildren<{
    id: string
    /** replacement for avatar letter */
    cutoff?: string
    text: string
    subText?: string
    onClick?: (ev: MouseEvent) => void
    style?: CSSProperties
  }>
) {
  const { id, cutoff, text, subText, onClick, style } = props
  return (
    <ContactListItemWrapper key={id} onClick={onClick} style={style}>
      <PseudoContact cutoff={cutoff} text={text} subText={subText}>
        {props.children}
      </PseudoContact>
    </ContactListItemWrapper>
  )
}

export const PseudoListItemNoSearchResults = ({
  queryStr,
}: {
  queryStr: string
}) => {
  const tx = window.translate
  return (
    <PseudoListItem
      id='addmember'
      text={tx('search_no_result_for_x', queryStr)}
    >
      <AvatarBubble noSearchResults />
    </PseudoListItem>
  )
}

export const PseudoListItemShowQrCode = ({
  onClick,
}: {
  onClick: (ev: MouseEvent) => void
}) => {
  const tx = window.translate
  return (
    <PseudoListItem id='showqrcode' text={tx('qrshow_title')} onClick={onClick}>
      <QRAvatar />
    </PseudoListItem>
  )
}

export const PseudoListItemAddMember = ({
  onClick,
}: {
  onClick: (ev: MouseEvent) => void
}) => {
  const tx = window.translate
  return (
    <PseudoListItem
      id='addmember'
      cutoff='+'
      text={tx('group_add_members')}
      onClick={onClick}
    />
  )
}

export const PseudoListItemAddContact = ({
  queryStr,
  queryStrIsEmail,
  onClick,
}: {
  queryStr: string
  queryStrIsEmail: boolean
  onClick: (ev: MouseEvent) => void
}) => {
  const tx = window.translate
  return (
    <PseudoListItem
      id='newcontact'
      cutoff='+'
      text={tx('menu_new_contact')}
      subText={
        queryStrIsEmail ? queryStr + ' ...' : tx('contacts_type_email_above')
      }
      onClick={onClick}
    />
  )
}
