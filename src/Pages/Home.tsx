import React, {useEffect, useState} from 'react'
import { Button, Form, Pagination, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { UpdateMessage } from '../Application-State/App/actions'
import { GetAllData, UpdateEmail } from '../Application-State/Home/actions'
import { AppState } from '../Application-State/types'

type props ={
  emailData: any,
  totalPages: number,
  currentPage: number,
  isError: boolean,
  message: string,
  GetAllData: (pageNo:number) => void,
  UpdateEmail: (oldEmail: string, newEmail: string) => void,
  UpdateMessage: () => void
}

const Home:React.FC<props> = ({emailData, totalPages, currentPage, isError, message, GetAllData, UpdateEmail, UpdateMessage}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState('')
  const [selectedOldEmail, setSelectedOldEmail] = useState('');

  let active = currentPage
  // @ts-ignore
  let items = [];
  for (let number = 1; number <= totalPages; number ++) {
    items.push(number);
  }

  useEffect(() => {
    GetAllData(1);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      UpdateMessage()
    }, 3000)
  }, [isError, message])

  const handlePageChange = (page: number) => {
    if(page) {
      GetAllData(page)
    }
  }

  const handleView = (index: number) => {
    setIsOpen(true)
    setSelectedEmail(emailData[index].email);
    setSelectedOldEmail(emailData[index].email)
  }

  const handleUpdate = (e:any) => {
    e.preventDefault();
    UpdateEmail(selectedOldEmail, selectedEmail);
    setSelectedOldEmail(selectedEmail);
    setIsOpen(false)
  }

  return (
    <>

      {/* Message Section */}
      <section className='container text-center'>
        <h5 style={{color: isError? 'red' : 'green', margin: '40px 0px 20px 0px'}}>{message}</h5>
      </section>

      {/* Table Section */}
      <section className='container mt-5'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {emailData?.map((item: any, index: number) => {
              return(
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  <td>{new Date(item.updatedAt).toLocaleString()}</td>
                  <td onClick={() => handleView(index)}>View</td>
                </tr> 
              )
            })}
          </tbody>
        </Table>
      </section>

      {/* Pagination Section */}
      <section className='container aligncenter'>
        <Pagination>
          {items.map((item, index) => {
            return(
              <Pagination.Item onClick={()=>handlePageChange(item)} key={index} active={item === active}>
                {item}
              </Pagination.Item>
            )
          })}
        </Pagination>
      </section>

      {/* Edit Section */}
      {isOpen && 
        <div className='container'>
          <Form onSubmit={(e:any) =>handleUpdate(e)} onReset={()=>setIsOpen(false)}>
            <Form.Group className='mb-3' controlId="emailupdatebox">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder='Enter New Email' value={selectedEmail} onChange={(e:any) => setSelectedEmail(e.target.value) } />
            </Form.Group>

            <Button type='submit' variant="primary">
              Update
            </Button>

            <Button type='reset' variant="secondary" style={{marginLeft: '20px'}}>
              Cancel
            </Button>
          </Form>
        </div>
      }
    </>
  )
}

const mapStateToProps = (state:AppState) => {
  return {
    loading: state.app.loading,
    emailData: state.home.emailData,
    currentPage: state.home.currentPage,
    totalPages: state.home.totalPages,
    isError: state.app.isError,
    message: state.app.message
  }
}

const mapDispatchToProps = {
  GetAllData: (pageNo: number) => GetAllData(pageNo),
  UpdateEmail: (oldEmail: string, newEmail: string) => UpdateEmail(oldEmail, newEmail),
  UpdateMessage: () => UpdateMessage()
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)