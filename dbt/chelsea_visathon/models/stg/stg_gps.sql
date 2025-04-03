{{ config(materialized='table' ) }}

select
    to_date(date, 'dd/mm/yyyy') as date,
    date_part('year',to_date(date, 'dd/mm/yyyy'))  as yyear,
    EXTRACT(WEEK FROM to_date(date, 'dd/mm/yyyy')) as wweek,
    EXTRACT(isodow FROM to_date(date, 'dd/mm/yyyy')) as weekday,
    sum((case when md_minus_code=0 then 1 else 0 end )) OVER ( ORDER BY to_date(date, 'dd/mm/yyyy') ASC) AS match_week,
    opposition_code,
    opposition_full,
    md_plus_code,
    md_minus_code,
    season,
    distance,
    distance_over_21,
    distance_over_24,
    distance_over_27,
    accel_decel_over_2_5,
    accel_decel_over_3_5,
    accel_decel_over_4_5,
    day_duration,
    peak_speed,
    hr_zone_1_hms,
    hr_zone_2_hms,
    hr_zone_3_hms,
    hr_zone_4_hms,
    hr_zone_5_hms
from "gps-data"
where to_date(date, 'dd/mm/yyyy')<'2025-03-13'::date
order by to_date(date, 'dd/mm/yyyy') ASC
