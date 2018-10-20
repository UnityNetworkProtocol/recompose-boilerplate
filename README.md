# Recompose Container/Component
A React boilerplate using recompose container/component template using the Ethers library.

### Introduction
The component references the Redux Ethers Module
```
/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState, withStateHandlers } from "recompose";

/* --- Local Dependencies --- */
import ethers from 'store/departments/ethers/actions' // <---- Ethers Redux Module Reference
import { fromEthers } from 'store/departments/selectors' <---- Ethers Redux Module Reference

/* --- Module Dependencies --- */
import Component from "./component";

```