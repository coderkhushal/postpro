import { useEffect, useState } from 'react'
import { useGetToken } from '../hooks/useGetToken'
import { useIsTokenExpired } from '../hooks/useIsTokenExpired'
import { useRefreshToken } from '../hooks/useRefreshToken'
import { useSetToken } from '../hooks/useSetToken'
import { useRemoveToken } from '../hooks/useRemoveToken'
import { useNavigate } from 'react-router-dom'
import { useGetAuthHeaders } from '../hooks/useGetAuthHeaders'
import { PostType } from '../types'
import PostItem from '../components/PostItem'
import PostCreation from './Postcreation'
import { IoReload } from 'react-icons/io5'

const BASE_URL_SERVER = "http://localhost:3000"
const Post = () => {
    const [page, setpage] = useState<number>(1)
    const [posts, setposts] = useState<PostType[] | null>(null)
    const navigation = useNavigate()
    useEffect(() => {
        const checkTokenAndRefresh = async () => {

            const token = useGetToken()

            if (token && useIsTokenExpired(token)) {
                try {

                    const newtoken = await useRefreshToken().toString()
                    console.log(newtoken)
                    useSetToken(newtoken)
                }
                catch (err) {
                    alert("error refreshing token")
                    console.log(err)
                    // logout
                    useRemoveToken()
                    navigation("/login")

                }
            }
            else if (!token) {
                navigation("/login")
            }
        }

        checkTokenAndRefresh()
    })
    useEffect(() => {
        fetchPosts()

    }, [page])
    const fetchPosts = async () => {
        try {
            const response = await fetch(`${BASE_URL_SERVER}/post?page=${page}`, {
                method: "GET",
                headers: useGetAuthHeaders()
            })
            const data = await response.json()
            console.log(data)
            setposts(value => data.data)
        }
        catch (err) {
            setposts(value => [])
            console.log(err)

        }
    }
    return (
        <section className="flex w-full h-full justify-center light py-14 md:py-24 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
            <div className="container px-8 md:px-24 h-full">
                <div className="grid grid-cols-12 h-full  justify-around">
                    <div className="col-span-12 md:col-span-9">
                        <h1 className="text-[32px] lg:text-[45px] leading-none font-bold mb-3">
                            Here are the latest Posts
                        </h1>
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-9">
                                <p className="text-lg opacity-80 mb-2">
                                    See what you have written seemlessly
                                </p>
                            </div>
                    <h1 onClick={fetchPosts} className='cursor-pointer'><IoReload/></h1>
                        </div>
                    </div>

                    <div className="col-span-12 h-full">
                        <div className="relative mt-12">
                            <div className="grid grid-cols-6 gap-x-6">
                                {posts && posts.map((post, i) => (
                                    <div
                                        className="col-span-6 md:col-span-3 lg:col-span-2"
                                        key={i}
                                    >
                                        <PostItem post={post} />
                                    </div>
                                ))}
                                {!posts && <div>Loading</div>}

                            </div>


                        </div>
                    </div>

                    <div className="col-span-12">
                        <div className="text-center mt-12 w-full flex justify-around">
                            <button className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition text-blue-600 px-8 py-3"
                                onClick={() => { setpage(value => page - 1) }}
                                disabled={page == 1 ? true : false}
                            >
                                Prev
                            </button>
                            <button className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition text-blue-600 px-8 py-3"
                                onClick={() => { setpage(value => page + 1) }}
                                disabled={posts && posts.length == 0 ? true : false}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post