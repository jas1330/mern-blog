import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import {BsFacebook,BsInstagram,BsTwitter,BsGithub,BsLinkedin} from 'react-icons/bs'
export default function FooterCon(){
    return(
      <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to='/'className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                  <span className='px-2 py-1 bg-gradient-to-r from-indigo-200 via-purple-500 to-blue-500 rounded-lg text-white'>
                  Blog
                  </span>
                  Forge
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>

                    <Footer.Title title="About" />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href=''
                            target='_blank'
                            rel='noopener noreferrer'> 
                            My Projects
                        </Footer.Link>
                        <Footer.LinkGroup col>
                        <Footer.Link 
                            href='/about'
                            target='_blank'
                            rel='noopener noreferrer'> 
                            About Blog Forge
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="Follow Us" />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'> 
                            Github
                        </Footer.Link>
                        <Footer.LinkGroup col>
                        <Footer.Link 
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'> 
                            Linkedin
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </Footer.LinkGroup>
                  </div>
                  <div className="">
                    <Footer.Title title="Legal" />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href='#'
                            > 
                            Privacy Policy
                        </Footer.Link>
                        <Footer.LinkGroup col>
                        <Footer.Link 
                            href='#'> 
                            Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </Footer.LinkGroup>

                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href='#' by="BlogForge" year={new Date().getFullYear()}>
 
              </Footer.Copyright>
              <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsGithub}/>
                <Footer.Icon href='#' icon={BsLinkedin}/>
                <Footer.Icon href='#' icon={BsTwitter}/>
              </div>
            </div>
        </div>
      
      </Footer>
    )
  }