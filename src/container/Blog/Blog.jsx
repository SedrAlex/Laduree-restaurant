import React,{ useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Blog.css'
import Masonry from 'react-masonry-component';
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import SubHeading from '../../components/SubHeading/SubHeading';
import { getAllPosts } from '../../actions/BlogActions';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { getAllPostsReducer } from '../../reducers/blogReducer';

const masonryOptions = 
{                                          
    transitionDuration: 0,   
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }


const Blog =() =>{   
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllPosts())
	  

	   
}, [])
const postsState = useSelector(state => state.getAllPostsReducer)
const {posts, error, loading } = postsState

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;
	const totalPages = Math.ceil(posts.length / itemsPerPage);
  
	const handlePageChange = (pageNumber) => {
	  setCurrentPage(pageNumber);
	};
  
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const paginatedGridBlog = posts.slice(startIndex, endIndex);
  
	const masonryOptions = {
	  // Add your other options here if needed
	};
   
   
		return(

			<div className="app__bg app__Blog " >
            <div className="app__blog-title">
         <SubHeading  title="Blog" />
          <h1 className="headtext__cormorant">Ladurée Updates</h1>
		  <>
	          {loading ? (
						  <Loading />
				   ) : error ? (
						   <  Error error='Something went wrong' />
						  ) : (
			<div className="content-inner section-full">
					<div className="blog__container">
						<div className="dlab-blog-grid-2 " id="masonry"  style={{width:"100%"}}>
						<Masonry
							className={'my-gallery-class'} 
							options={masonryOptions} 
							// default {}
							disableImagesLoaded={false} // default false
							updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
							imagesLoadedOptions={imagesLoadedOptions} // default {}
						>  
					
							{paginatedGridBlog.map((item, index) => (

								<div key={index}>
									<div className="blog-post blog-grid blog-rounded blog-effect1">
										<div className="dlab-post-media dlab-img-effect"> 
											<Link to ={'/blog-single'}><img src = {item.image} alt="" /></Link> 
										</div>
										<div className="dlab-info">
											<div className="dlab-post-title ">
												<h4 className="post-title">{item.title}</h4>
											</div>
											<div className="dlab-post-meta">
												<div className="post-author-thumb">
													<img src={require('../../assets/images/pic1.jpg')} alt="" />
												</div>
												<ul>
													<li className="post-author">Admin </li>
													<li className="post-date">{item.createdAt}</li>
												</ul>
											</div>
											<div className="dlab-post-text">
												<p>{item.content}</p>
											</div>
											<div className="dlab-post-readmore"> 
												<Link to ={'/blog-single'} title="READ MORE" rel="bookmark" className="btn btn-sm btn1 btnhover"><i className="fa fa-angle-right"></i>READ MORE</Link>
											</div>
										</div>
									</div>
								</div>	
							))}
						</Masonry>	
						</div>
					</div>
				
				</div>	)}
				<div className="pagination-bx clearfix primary rounded-sm col-md-12 text-center">
        <ul className="pagination justify-content-center">
          <li className={currentPage === 1 ? 'disabled' : ''}>
            <button onClick={() => handlePageChange(currentPage - 1)}>
            <BsArrowLeftShort className="ti-arrow-left" />
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
              <button onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={currentPage === totalPages ? 'disabled' : ''}>
            <button onClick={() => handlePageChange(currentPage + 1)}>
			<BsArrowRightShort className="ti-arrow-right" /> 
            </button>
          </li>
        </ul>
      </div>	
	 

    </>
	</div>	
      </div>	
  );
};

export default Blog