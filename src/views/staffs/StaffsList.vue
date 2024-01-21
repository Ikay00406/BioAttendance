<template>
    <div class="container-fluid">
                        <div class="nk-content-inner">
                            <div class="nk-content-body">
                                <div class="nk-block-head nk-block-head-sm">
                                    <div class="nk-block-between">
                                        <div class="nk-block-head-content">
                                            <h3 class="nk-block-title page-title">Staffs</h3>
                                        </div><!-- .nk-block-head-content -->
                                        <div class="nk-block-head-content">
                                            <div class="toggle-wrap nk-block-tools-toggle">
                                                <a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1" data-target="more-options"><em class="icon ni ni-more-v"></em></a>
                                                <div class="toggle-expand-content" data-content="more-options">
                                                    <ul class="nk-block-tools g-3">
                                                        <li>
                                                            <div class="form-control-wrap">
                                                                <div class="form-icon form-icon-right">
                                                                    <em class="icon ni ni-search"></em>
                                                                </div>
                                                                <input type="text" class="form-control" id="default-04" placeholder="Search by name">
                                                            </div>
                                                        </li>
                                                        <li class="nk-block-tools-opt">
                                                            <a class="btn btn-icon btn-primary d-md-none" data-bs-toggle="modal" href="#student-add"><em class="icon ni ni-plus"></em></a>
                                                            <a class="btn btn-primary d-none d-md-inline-flex" data-bs-toggle="modal" href="#student-add"><em class="icon ni ni-plus"></em><span>Add</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div><!-- .nk-block-head-content -->
                                    </div><!-- .nk-block-between -->
                                </div><!-- .nk-block-head -->
                                <div class="nk-block">
                                    <div class="card">
                                        <div class="card-inner-group">
                                            <div class="card-inner p-0">
                                                <div class="nk-tb-list nk-tb-ulist">
                                                    <div class="nk-tb-item nk-tb-head">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input" id="uid">
                                                                <label class="custom-control-label" for="uid"></label>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="nk-tb-col tb-col-lg"><span class="sub-text">S/N</span></div>
                                                        <div class="nk-tb-col"><span class="sub-text">Name</span></div>
                                                        <div class="nk-tb-col tb-col-mb"><span class="sub-text d-lg-flex d-none">Department</span></div>
                                                        <div class="nk-tb-col tb-col-md"><span class="sub-text">Created At</span></div>
                                                        <div class="nk-tb-col tb-col-lg"><span class="sub-text">Action</span></div>
                                                        
                            
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1 my-n1">
                                                                <li>
                                                                    <div class="drodown">
                                                                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="#"><em class="icon ni ni-mail"></em><span>Send Email to All</span></a></li>
                                                                                <li><a href="#"><em class="icon ni ni-na"></em><span>Suspend Selected</span></a></li>
                                                                                <li><a href="#"><em class="icon ni ni-trash"></em><span>Remove Seleted</span></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div><!-- .nk-tb-item -->
                                                    <div class="nk-tb-item">
                                                        <div class="nk-tb-col nk-tb-col-check">
                                                            <div class="custom-control custom-control-sm custom-checkbox notext">
                                                                <input type="checkbox" class="custom-control-input" id="uid1">
                                                                <label class="custom-control-label" for="uid1"></label>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md">
                                                            <span>1</span>
                                                        </div>
                                                        <div class="nk-tb-col">
                                                            <a href="html/lms/students-details.html">
                                                                <div class="user-card">
                                                                    <div class="user-avatar bg-primary">
                                                                        <span>JD</span>
                                                                    </div>
                                                                    <div class="user-info">
                                                                        <span class="tb-lead"> John Doe <span class="dot dot-success d-md-none ms-1"></span></span>
                                                                        <span>johndoe@schoolville.com</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-mb">
                                                            <span class="tb-lead d-lg-flex d-none">ICT</span>
                                                            <div class="d-lg-flex d-none">
                                                                <div class="drodown">
                                                                    <a href="#" class="dropdown-toggle pt-1 text-info" data-bs-toggle="dropdown"> <span>View More</span> </a>
                                                                    <div class="dropdown-menu dropdown-menu-start">
                                                                        <ul class="link-list-opt no-bdr p-3">
                                                                            <li class="tb-lead p-1">Education and Training</li>
                                                                            <li class="tb-lead p-1">Research and Development</li>
                                                                            <li class="tb-lead p-1">Administration</li>
                                                                            <li class="tb-lead p-1">Front Office</li>
                                                                            <li class="tb-lead p-1">Security</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-md">
                                                            <span> 8:03:21 AM</span>
                                                        </div>
                                                        <div class="nk-tb-col tb-col-lg">
                                                            <span>  <button type="button" class="btn btn-primary">
                                                                        <i class="bi bi-pencil"></i> Edit
                                                                    </button>
                                                                    <button type="button" class="btn btn-danger">
                                                                    <i class="bi bi-trash"></i> Delete
                                                                    </button> </span>
                                                        </div>
                                                        
                                            
                                                        <div class="nk-tb-col nk-tb-col-tools">
                                                            <ul class="nk-tb-actions gx-1">
                                                                
                                                                <li>
                                                                    <div class="drodown">
                                                                        <a href="#" class="dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <ul class="link-list-opt no-bdr">
                                                                                <li><a href="html/lms/students-details.html"><em class="icon ni ni-eye"></em><span>View Details</span></a></li>
                                                                                <li><a href="#"><em class="icon ni ni-activity-round"></em><span>Activities</span></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div><!-- .nk-tb-list -->
                                            </div>
                                            <div class="card-inner">
                                                <div class="nk-block-between-md g-3">
                                                    <div class="g">
                                                        <ul class="pagination justify-content-center justify-content-md-start">
                                                            <li class="page-item"><a class="page-link" href="#"><em class="icon ni ni-chevrons-left"></em></a></li>
                                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                            <li class="page-item"><span class="page-link"><em class="icon ni ni-more-h"></em></span></li>
                                                            <li class="page-item"><a class="page-link" href="#">6</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">7</a></li>
                                                            <li class="page-item"><a class="page-link" href="#"><em class="icon ni ni-chevrons-right"></em></a></li>
                                                        </ul><!-- .pagination -->
                                                    </div>
                                                    <div class="g">
                                                        <div class="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                                                            <div>Page</div>
                                                            <div>
                                                                <select class="form-select js-select2 select2-hidden-accessible" data-search="on" data-dropdown="xs center" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                                                    <option value="page-1" data-select2-id="3">1</option>
                                                                    <option value="page-2">2</option>
                                                                    <option value="page-4">4</option>
                                                                    <option value="page-5">5</option>
                                                                    <option value="page-6">6</option>
                                                                    <option value="page-7">7</option>
                                                                    <option value="page-8">8</option>
                                                                    <option value="page-9">9</option>
                                                                    <option value="page-10">10</option>
                                                                    <option value="page-11">11</option>
                                                                    <option value="page-12">12</option>
                                                                    <option value="page-13">13</option>
                                                                    <option value="page-14">14</option>
                                                                    <option value="page-15">15</option>
                                                                    <option value="page-16">16</option>
                                                                    <option value="page-17">17</option>
                                                                    <option value="page-18">18</option>
                                                                    <option value="page-19">19</option>
                                                                    <option value="page-20">20</option>
                                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 82px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-rh5b-container"><span class="select2-selection__rendered" id="select2-rh5b-container" role="textbox" aria-readonly="true" title="1">1</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div><!-- .pagination-goto -->
                                                </div><!-- .nk-block-between -->
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- .nk-block -->
                            </div>
                        </div>
                    </div>
</template>