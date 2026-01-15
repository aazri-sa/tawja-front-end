import { useEffect, useState } from 'react';
import axios from 'axios'

import '../assets/css/tree.css';
import {CalendarIcon} from "@heroicons/react/24/outline";
import 'moment/locale/fr';
import moment from "moment";

function Tree() {

  const [familyData, setFamilyData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

    useEffect(() => {
        document.title = "Tawja | Arbre généalogique";
    },[]);

  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_API_BASE_URL + "/api/family-tree/",
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
      },
    };
      //console.log("config", config);
    axios
        .request(config)
        .then((response) => {
          const data = response.data;
          setFamilyData(data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  const openModal = (person) => {
        setShowModal((prev) => !prev);
        setSelectedPerson(person);
        console.log("person", person)
    };

  const mapData = (person) => {
    //console.log(person);
    const { id, first_name, last_name, partner, image, children, date_of_birth } = person;
    console.log("partner", partner);
    let hierarchyNode = (

        <li key={id}>
          <a href="#!"
             onClick={() => {

                 openModal(person);
                 console.log("showModal!_________----------------___________::", showModal, id,first_name);
             }}

          >
            <div className='card'>
              <div className={"principle"}>
                <img src={process.env.REACT_APP_API_BASE_URL + image} loading={"lazy"} />
                <span className='profile1'> {first_name} {last_name}</span>
              </div>
              <div className={"partner"}>
                  <img src={process.env.REACT_APP_API_BASE_URL + partner?.image} loading={"lazy"} />
                <span className='profile2'>{partner?.first_name} {partner?.last_name}</span>
              </div>

            </div>
          </a>


          {
              children.length > 0 && <ul>{children?.map((child) =>mapData(child))}</ul>
          }
        </li>

    );

    return hierarchyNode;
  };

  return (
      <>
          <div className="App tree shadow-inner overflow-y-scroll no-scrollbar p-12">
              <ul className='headtree'>
                  {!!familyData &&  familyData?.map((item=> mapData(item))) }
              </ul>
          </div>

          <div>

                      {

                          showModal ?
                              <>
                                  <div className={"overlay"}>
                                      <div
                                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                      >
                                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                              {/*content*/}
                                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                  {/*header*/}
                                                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                      <h3 className="text-3xl font-semibold">
                                                          Détails
                                                      </h3>
                                                      <button
                                                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                          onClick={() => setShowModal(false)}
                                                      >
                                                          <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                            X
                                                          </span>
                                                      </button>
                                                  </div>
                                                  {/*body*/}
                                                  <div className="relative p-6 flex-auto">
                                                      <div className={"flex space-x-4"}>
                                                          <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
                                                              <div className={"h-48 ml-auto"}>
                                                                  <img src={process.env.REACT_APP_API_BASE_URL + selectedPerson?.image} alt={selectedPerson?.first_name} className="object-cover object-center h-full rounded-md h-45 bg-gray-500 mx-auto" />

                                                              </div>
                                                              <div className="mt-6 mb-2">
                                                                  <h2 className="text-xl font-semibold tracki">{selectedPerson?.first_name + ' ' + selectedPerson?.last_name}</h2>
                                                              </div>
                                                              <p><span className={"grid grid-flow-col auto-cols-max gap-1"}><CalendarIcon className={"h-6 stroke-2 text-gray-800"} /> {moment(selectedPerson?.date_of_birth).format("DD MMMM, YYYY")}</span></p>
                                                              <p className="text-gray-800">{selectedPerson?.description}</p>
                                                          </div>
                                                          {
                                                              selectedPerson?.partner ?
                                                                  <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
                                                                      <div className={"h-48 ml-auto"}>
                                                                        <img src={process.env.REACT_APP_API_BASE_URL + selectedPerson?.partner?.image} alt="" className="object-cover object-center h-full rounded-md h-45 bg-gray-500 mx-auto" />
                                                                      </div>
                                                                      <div className="mt-6 mb-2">

                                                                          <h2 className="text-xl font-semibold tracki">{ selectedPerson?.partner?.first_name + ' ' + (selectedPerson?.partner?.last_name??"") }</h2>
                                                                      </div>
                                                                      <p><span className={"grid grid-flow-col auto-cols-max gap-1"}><CalendarIcon className={"h-6 stroke-2 text-gray-800"} />{selectedPerson?.partner?.date_of_birth}</span></p>
                                                                      <p className="text-gray-800">{selectedPerson?.partner?.description}</p>
                                                                  </div>
                                                                  :
                                                                    null
                                                          }
                                                      </div>
                                                  </div>
                                                  {/*footer*/}
                                                  {/*<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">*/}
                                                  {/*    <button*/}
                                                  {/*        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                                                  {/*        type="button"*/}
                                                  {/*        onClick={() => setShowModal(false)}*/}
                                                  {/*    >*/}
                                                  {/*        Close*/}
                                                  {/*    </button>*/}
                                                  {/*</div>*/}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </>
                              :
                              null
                      }

          </div>
      </>

  );
}

export default Tree;