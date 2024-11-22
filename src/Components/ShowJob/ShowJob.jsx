import { MdLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const ShowJob = ({job}) => {
    const {id, logo, job_title, 
        company_name, remote_or_onsite,
        location, job_type, salary
    } = job;
    return (
        <div className="">
              <div className="card card-compact bg-base-100 shadow-xl mb-4">
        <figure>
          <img className="mt-40"
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold mr-4 text-[#7E90FE]
             border rounded border-[#7E90FE]">{remote_or_onsite}</button>
            <button  className="px-5 py-2 font-extrabold mr-4 text-[#7E90FE]
             border rounded border-[#7E90FE]">{job_type}</button>
          </div>
          < div className="mt-4 flex">
            <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
           <h2 className="flex"><CiDollar className="text-2xl"></CiDollar>{salary}</h2>
          </div>
          <div className="card-actions justify-end">
           <Link to={`/job/${id}`}>
           <button className="btn btn-primary">Already Applied</button>
           </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ShowJob;