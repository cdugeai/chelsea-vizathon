{{ config(materialized='table' ) }}

select
    yyear,
    match_week,
    count(*) as n_days,
    (row_number() over (partition by yyear order by yyear desc, match_week desc))-1  as previous_week
from {{ ref('stg_gps') }}
group by yyear, match_week
order by yyear desc, match_week desc
limit 5
