import React, { useState, useEffect } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button , Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Pagination,} from '@windmill/react-ui'
import {AiFillEye} from "react-icons/ai"
import { EditIcon, TrashIcon } from '../icons'

import response from '../utils/demo/tableData'
// make a copy of the data, for the second table
const response2 = response.concat([])

function Seller() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  function openModal() {
    setIsModalOpen(true)
    setIsEditModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])
  const resultsPerPage = 10
  const sellers =  [...Array(50)].map((e,i)=>{
          return({
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg',
     name: 'Shayna Schumm',
    job: 'Future Directives Engineer',
    amount: 313.73,
    status: 'warning',
    date: 'Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)',
          })
    })
   var  pagedseller = sellers.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage)

  // pagination setup
  
  const totalResults = sellers.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])


 
  return (
    <>
      <PageTitle>Sellers</PageTitle>
      <SectionTitle>Pending Sellers</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Seller</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {pagedseller.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User avatar" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>pending</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit"onClick={openModal}>
                      <AiFillEye className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete" onClick={()=>{setIsDeleteModalOpen(true)}}>
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>

      <SectionTitle>Sellers</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Seller</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User avatar" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type="success">{"active"}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit" onClick = {()=>{setIsEditModalOpen(true)}}>
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>

      <SectionTitle>Reported Sellers</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User avatar" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={"success"}>{"active"}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit" onClick = {()=>{setIsEditModalOpen(true)}}>
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>


      {/* modal for view seller */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
          voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button>Accept</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      {/* modal for edit  */}
      <Modal isOpen={isEditModalOpen} onClose={()=>{setIsEditModalOpen(false)}}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
          voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button layout="outline" onClose={()=>{setIsEditModalOpen(false)}}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button>Accept</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClose={()=>{setIsEditModalOpen(false)}}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>
      {/* delete modal  */}
      <Modal isOpen={isDeleteModalOpen} onClose={()=>{setIsDeleteModalOpen(false)}}>
        <ModalHeader>Confirm Delete</ModalHeader>
        <ModalBody>
         Are you sure want to delete this seller ?
        </ModalBody>
        <ModalFooter>
          <div className="hidden sm:block">
            <Button layout="outline" onClick={()=>{setIsDeleteModalOpen(false)}}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <button style={{borderRadius:"10px"}} className='px-4  py-2 bg-red-600 text-white'>Delete</button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={()=>{setIsDeleteModalOpen(false)}}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block  className="bg-red-200" Colors="Adafruit_SSD1306.create_spi(0, 0, 0, 0)" >
              Delete
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Seller
