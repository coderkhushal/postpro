
import { PostType } from '../types'

const PostItem = ({post}:{post: PostType}) => {
    const {title , content} = post
  return (
    <div className="rounded-lg transition-all hover:scale-105 overflow-y-auto mt-6 h-full my-10 lg:mt-0">
			<div className="relative">
				<img src="https://cdn.easyfrontend.com/pictures/courses/courses_3_2.png" alt="" className='w-full blur-sm' />
				<div className="absolute bottom-0  flex flex-col justify-center items-center w-full overflow-y-scroll h-full text-white px-12 pb-6 text-center">
					<h4 className="text-[22px] font-medium">{title}</h4>
					<h5 className="text-[22px] font-medium   text-blue-500 my-3 ">
						{content} 
					</h5>
			
			
				</div>
			</div>
		</div>
  )
}

export default PostItem