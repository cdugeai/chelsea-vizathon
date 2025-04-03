{{ config(materialized='table' ) }}

select
    a.yyear,
    a.match_week,
    a.previous_week,
    b.md_plus_code,
    b.md_minus_code,
    b.date,
    b.day_duration,
    b.distance,
    b.peak_speed
from {{ref('int_gps_last_5_weeks')}} a
left join {{ref('stg_gps')}} b on a.yyear=b.yyear and a.match_week=b.match_week