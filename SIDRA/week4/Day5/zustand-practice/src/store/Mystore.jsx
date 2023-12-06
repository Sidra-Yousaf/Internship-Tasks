import React from 'react'
import { create } from 'zustand'
import data from "../Components/data.json"




const useStore = create((set) => ({
    jobs: data,
    //  jobs filtering data sidd
  selectedFilters: {
    role: '',
    languages: '',
    level: '',
    tools: '',
  },
  setFilters: (filters) => set((state) => ({ selectedFilters: filters })),
  }));


export default useStore