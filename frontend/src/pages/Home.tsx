
import { Link } from 'react-router-dom'
import {useHomeTour} from '../shepherdService';
import { useEffect } from 'react';
const Home = () => {
	useEffect(()=>{
        let tour = useHomeTour()
        tour.start()
    },[])
  return (
    <section className="ezy__header22 light pt-24 md:pt-44 bg-white  text-indigo-900 ">
			<div className="container px-4 mx-auto relative">
				<div className="grid grid-cols-12 gap-y-6 lg:gap-x-6">
					<div className="col-span-12 lg:col-span-6 xl:pr-12 text-center lg:text-start">
						<div className="pb-14 lg:pb-32">
							<h2 className="text-3xl md:text-[70px] md:leading-[85px] font-bold mb-4">
								Designed with Passion and Built for Performance
							</h2>
							<p className="text-[22px] leading-normal opacity-80">
								Unleash Your creativity. Create Posts that you like.
							</p>
							<div>
								<Link
									to="/post"
									className="bg-blue-600 rounded py-3 px-8 hover:bg-opacity-90 duration-300 text-white text-xl inline-flex mt-6 md:mt-12"
								>
									See Posts
								</Link>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6 flex items-end justify-center">
						<img
							src="https://cdn.easyfrontend.com/pictures/shape-2.png"
							alt=""
							className="rounded img-fluid mt-4"
						/>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Home