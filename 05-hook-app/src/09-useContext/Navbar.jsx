import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">USE CONTEXT</NavLink>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={(args) => {
                            // console.log(args)
                            // { isActive: true, isPending: false, isTransitioning: false }
                            return `nav-link ${args.isActive ? 'active' : ''}`
                        }} to="/">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className={(args) => {
                            // console.log(args)
                            return `nav-link ${args.isActive ? 'active' : ''}`
                        }} to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* We use the componente NavLink instead use Link because we can add the class "active" when the link has matched with the path url  */}
                        <NavLink className={(args) => {
                            // console.log(args)
                            return `nav-link ${args.isActive ? 'active' : ''}`
                        }
                        } to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
}
