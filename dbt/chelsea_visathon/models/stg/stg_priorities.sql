{{ config(materialized='table' ) }}

select
    "Priority" as priority,
"Category" as category,
"Area" as area,
"Target" as target,
"Performance Type" as perf_type,
    to_date("Target set", 'dd/mm/yyyy') as target_set,
    to_date("Review Date", 'dd/mm/yyyy') as review_date,

    "Tracking" as tracking,
    -- mock data
    24*"Priority"+4 as progression_pct
from priorities