import React, { useState } from 'react';

import api from "./../api/server"

const MemberContext = React.createContext()

export const MemberProvider = ({ children }) => {

    const [members, setMembers] = useState([])

    const getMembers = async () => {
        const response = await api.get('/member/all')
        setMembers(response.data)
    }

    const addMember = async (member) => {
        const response = await api.post('/member/add', member)
        setMembers([...members, response.data])
    }

    const editMember = async (editedMember) => {
        await api.patch(`/member/update_info/${editedMember._id}`, member)

        const newMembers = members.map((member) => {
            return member._id === _id ? editedMember : member
        })

        setMembers(newMembers);
    }

    const deleteMember = async (_id) => {
        await api.delete(`/member/delete/${_id}`)
        const newMembers = members.filter(member => member._id !== _id)
        setMembers(newMembers);
    }

    return (
        <MemberContext.Provider
            value={
                {
                    data: members,
                    getMembers,
                    addMember,
                    editMember,
                    deleteMember
                }
            }>
            {children}
        </MemberContext.Provider>
    )
}

export default MemberContext