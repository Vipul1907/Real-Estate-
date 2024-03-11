import "../pages/CssFile/super_admin/adminHome.css"
import SmallPagination from "../multiuse/smallCardPagination/SmallPagination";
const adminHome = () => {
    return (
        <>
            <div className="admin_main">
                <div className="overview">
                    <h4>Overview</h4>
                </div>
                <div className="overview_section">
                    <div className="approve_pro">
                        <div className="pro-text">
                            <h4>1000 Properties</h4>
                            <h5>Approved Properties</h5>
                            <h6>Overall</h6>
                        </div>
                    </div>
                    <div className="approve_req">
                        <div className="req-text">
                            <h4>78 Properties</h4>
                            <h5>Approval Request</h5>
                            <h6>In last 2 days</h6>
                        </div>
                    </div>
                    <div className="user_added">
                        <div className=" add-text">
                            <h4>8 Users added</h4>
                            <h5>Approved Properties</h5>
                            <h6>4 Active</h6>
                        </div>
                    </div>
                    <div className="enquiries">
                        <div className="enq-text">
                            <h4>100 Enquiries</h4>
                            <h5>Approved Properties</h5>
                            <h6>In last 24 Hours</h6>
                        </div>
                    </div>
                </div>
                <div className="select_section">
                    <p>Select</p>
                    <div className="select-btn">
                        <button>Users</button>
                    </div>
                </div>
               <SmallPagination />
            </div>
        </>
    )
}
export default adminHome;