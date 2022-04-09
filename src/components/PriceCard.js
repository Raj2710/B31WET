import React from 'react'

function PriceCard(props) {
  return <>
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.product}</h5>
            <h6 class="card-price text-center">${props.data.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li class = {props.data.userEnabler?"":"text-muted"}><span class="fa-li">{props.data.userEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.userBold?<><b>{props.data.user}</b></>:props.data.user}</li>
              <li class = {props.data.storageEnabler?"":"text-muted"}><span class="fa-li">{props.data.storageEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.storage}</li>
              <li class = {props.data.publicProjectsEnabler?"":"text-muted"}><span class="fa-li">{props.data.publicProjectsEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.publicProjects}</li>
              <li class = {props.data.communityAccessEnabler?"":"text-muted"}><span class="fa-li">{props.data.communityAccessEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.communityAccess}</li>
              <li class = {props.data.privateProjectsEnabler?"":"text-muted"}><span class="fa-li">{props.data.privateProjectsEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.privateProjects}</li>
              <li class = {props.data.phoneSupportEnabler?"":"text-muted"}><span class="fa-li">{props.data.phoneSupportEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.phoneSupport}</li>
              <li class = {props.data.subdomainEnabler?"":"text-muted"}><span class="fa-li">{props.data.subdomainEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.subdomain}</li>
              <li class = {props.data.statusReportEnabler?"":"text-muted"}><span class="fa-li">{props.data.statusReportEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.statusReport}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default PriceCard