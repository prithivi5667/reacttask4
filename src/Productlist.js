import {Link} from "react-router-dom"
export default function Productlist(){
    return <>
   
                <Link to ='/Productcreate'>Create Product</Link>
              
                 
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Product List</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Brand</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Creta</td>
                                            <td>Hyundai</td>
                                           
                                            <td>
                                                <Link to="/Productedit/1">Edit Product</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jazz</td>
                                            <td>Honda</td>
                                            
                                            <td>
                                            <Link to="/Productedit/2">Edit Product</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Hector</td>
                                            <td>MG</td>
                                            
                                            <td>
                                            <Link to="/Productedit/3">Edit Product</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Carnival</td>
                                            <td>Kia</td>
                                            
                                            <td>
                                            <Link to="/Productedit/4">Edit Product</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

 
    </>

}