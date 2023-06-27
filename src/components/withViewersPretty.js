import New from "./New";
import Popular from "./Popular";


export default function withViewersPretty() {
	return function (Component) {
		function ChangeComponents(props) {
			if (props.views > 1000) {
				return (
					<Popular><Component {...props} /></Popular>
				)
			}
			 return (
				<New><Component {...props} /></New>
			 )
		};
		
		const name = Component.displayName || Component.name || 'Component';
		ChangeComponents.displayName = `WithData${name}`;
		
		return ChangeComponents;
	}
};