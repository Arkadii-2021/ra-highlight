import Video from "./Video";
import Article from "./Article";
import withViewersPretty from "./withViewersPretty";


const UpdateVideo = withViewersPretty()(Video);
const UpdateArticle = withViewersPretty()(Article);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <UpdateVideo {...item} />
                );

            case 'article':
                return (
                    <UpdateArticle {...item} />
                );
        }
    });
};