import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        // TODO: viet logic goi API
        const fetchPost = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => response.json())
                .then((data) => setPost(data));
        };
        fetchPost();
    }, [id]);

    return (
        <>
            {/* toán tử 3 ngôi if ... else */}
            {!post ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </>
    );
};

export default PostDetail;